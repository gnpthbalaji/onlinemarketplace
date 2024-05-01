# onlinemarketplace

This is a project for creating an online marketplace built with Django.

## Installation

To install and run this project, follow these steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies by running the command `pip install -r requirements.txt`.
4. Set up the database:
    - For local development, configure the settings in `settings.py` to use SQLite.
    - For production deployment on Heroku, configure the settings to use Heroku PostgreSQL.
5. Apply the database migrations by running the command `python manage.py migrate`.
6. Start the application by running the command `python manage.py runserver`.

## Usage

Once the application is running, you can access it by opening your web browser and navigating to `http://localhost:8000`.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.