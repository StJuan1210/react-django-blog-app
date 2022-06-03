# react-django-blog-app
A React frontend and django backend based blog app

## Screenshots
![image](https://user-images.githubusercontent.com/86282256/171789005-cb6c061a-550e-4852-abb4-2486c1b47778.png)

![image](https://user-images.githubusercontent.com/86282256/171789077-e33b1e2d-8fde-4259-82cb-50667be429af.png)

![image](https://user-images.githubusercontent.com/86282256/171789111-334a9482-a73e-4173-b8a1-58cfd3bd9fa4.png)

![image](https://user-images.githubusercontent.com/86282256/171789150-416c0572-8ae4-4c87-8d01-e4777685e05e.png)

![image](https://user-images.githubusercontent.com/86282256/171789178-1f0ff107-a532-480c-a342-42e457a9ccd6.png)


## To start server

Clone the repository and cd into the server folder. Then run
`python manage.py migrate`

You will have to edit the settings.py file in server/core to make it work with your configuration

To create an admin account:
`python manage.py createsuperuser`

To run the server:
`python manage.py runserver`

## To start the frontend

cd into the client folder and run
`npm install`

To start the frontend:
`npm start`
