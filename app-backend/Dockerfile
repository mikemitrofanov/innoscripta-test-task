FROM php:8.2-alpine

# Installing php extensions
RUN apk update && apk upgrade
RUN docker-php-ext-install pdo pdo_mysql bcmath

# Installing redis extension
RUN mkdir -p /usr/src/php/ext/redis \
    && curl -fsSL https://github.com/phpredis/phpredis/archive/5.3.4.tar.gz | tar xvz -C /usr/src/php/ext/redis --strip 1 \
    && echo 'redis' >> /usr/src/php-available-exts \
    && docker-php-ext-install redis

RUN composer install

RUN php artisan key:generate
RUN php artisan l5-swagger:generate

CMD php artisan serve --host 0.0.0.0

EXPOSE 8000

