# Packt Assessment 

This is Laravel + ReactJS app with the integration of Packt Products and Product Detail APIs.

## Installation

Before jumping in, you'll want to make sure you have the system requirements met:
- PHP 7.3 - 8.1 ([Installation Guide](https://www.php.net/manual/en/install.php))
- Composer ([Installation Guide](https://getcomposer.org/doc/00-intro.md))
- Laravel 8 ([Installation Guide](https://laravel.com/docs/5.8))
- NodeJS v16.13.0 ([Installation Guide](https://nodejs.org/ru/blog/release/v16.13.0/))

After downloading the code, go the code folder and follow the below steps.

To install PHP/Laravel dependancies:

```bash
composer install
```
And JS dependancies:
```bash
npm install
```

## Usage
To compile JS assets:
```bash
npm run dev
```


Before running the app, create `.env` file and copy the content of `.env.example` file to `.env` file.

Set the `APP_URL` to the URL of the app. e.g. if it's http://127.0.0.1:8000 so in .env file set...
```bash
APP_URL=http://127.0.0.1:8000
```

To run the app go to the app directory and enter the following command in the terminal.
```bash
php artisan serve
```

If you get an error in the browser related to key like... `No application encryption key has been specified.` run the following command in the terminal to generate the new key.
```bash
php artisan key:generate
```
