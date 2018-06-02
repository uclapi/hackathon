# Start with a base Node.js 9 image
FROM node:9-alpine

# Update package lists
RUN apk update

# Install Python 3
RUN apk add --no-cache python python-dev python3 python3-dev \
    linux-headers build-base bash git ca-certificates && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
    rm -r /root/.cache

# Set the timezone to Europe/London
RUN apk add --no-cache tzdata && \
    cp /usr/share/zoneinfo/Europe/London /etc/localtime && \
    echo "Europe/London" > /etc/timezone

# Copy everything to the image
COPY . .
WORKDIR src/

# Install the frontend build components
RUN npm install

# Install PostgreSQL
RUN apk add curl libpq postgresql-client postgresql postgresql-contrib && \
    curl -o /usr/local/bin/gosu -sSL "https://github.com/tianon/gosu/releases/download/1.2/gosu-amd64" && \
    chmod +x /usr/local/bin/gosu

# Get required PostgreSQL Libraries
RUN apk add postgresql-libs && \
 apk add --virtual .build-deps gcc musl-dev postgresql-dev

# Install the requirements components
RUN pip install -r requirements.txt

ENV LANG en_US.utf8
ENV PGDATA /var/lib/postgresql/data
RUN mkdir -p "$PGDATA"

RUN chown -R postgres "$PGDATA"
RUN if [ -z "$(ls -A "$PGDATA")" ]; then \
        gosu postgres initdb \
        sed -ri "s/^#(listen_addresses\s*=\s*)\S+/\1'*'/" "$PGDATA"/postgresql.conf \
        : ${POSTGRES_USER:="postgres"} \
        : ${POSTGRES_DB:=$POSTGRES_USER} \
        if [ "$POSTGRES_PASSWORD" ]; then \
        pass="PASSWORD '$POSTGRES_PASSWORD'" \
        authMethod=md5 \
        else \
        echo "===============================" \
        echo "!!! Use \$POSTGRES_PASSWORD env var to secure your database !!!" \
        echo "===============================" \
        pass= \
        authMethod=trust \
        fi \
        if [ "$POSTGRES_DB" != 'postgres' ]; then \
        createSql="CREATE DATABASE $POSTGRES_DB;" \
        echo $createSql | gosu postgres postgres --single -jE \
        echo \
        fi \
        if [ "$POSTGRES_USER" != 'postgres' ]; then \
        op=CREATE \
        else \
        op=ALTER \
        fi \
        userSql="$op USER $POSTGRES_USER WITH SUPERUSER $pass;" \
        echo $userSql | gosu postgres postgres --single -jE \
        gosu postgres pg_ctl -D "$PGDATA" -o "-c listen_addresses=''" -w start \
        for f in /docker-entrypoint-initdb.d/*; do \
            case "$f" in \
                *.sh)  echo "$0: running $f"; . "$f" ;; \
                *.sql) echo "$0: running $f"; psql --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" < "$f" && echo ;; \
                *)     echo "$0: ignoring $f" ;; \
            esac \
            echo \
        done \
        gosu postgres pg_ctl -D "$PGDATA" -m fast -w stop \
        { echo; echo "host all all 0.0.0.0/0 $authMethod"; } >> "$PGDATA"/pg_hba.conf \
    fi

RUN exec gosu postgres "$@"

# Run the backend
CMD gunicorn --pythonpath backend backend.wsgi
