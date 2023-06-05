## FollowCoin
Este es un proyecto de Next.js para una aplicación de seguimiento de criptomonedas en tiempo real. En este archivo README se proporcionan instrucciones para realizar el deploy local de la aplicación. También se indican las variables de entorno necesarias.

## Requisitos previos
Antes de comenzar, asegúrate de tener instalado Node.js en tu sistema.
```
node --version
```
Si no lo tienes instalado descárgalo desde la pagina oficial  https://nodejs.org/en

## Instrucciones de deploy local
Clona el repositorio de GitHub de FollowCoin en tu sistema local:

```
git clone https://github.com/antonioadv08/followcoinProyect
```

Entra en el directorio del proyecto:

```
cd followcoin
```

Instala las dependencias del proyecto:

```
npm install
```

Crea un archivo .env en el directorio raíz del proyecto y define las siguientes variables de entorno:

```
MONGODB_URI=uri-de-mongodb
COINMARKETCAP_API_KEY=tu-api-key-de-coinmarketcap
NEWS_DATA_API_KEY=tu-api-key-de-newsdata
EMAIL_SERVER_HOST=host-del-servidor-de-correo
EMAIL_SERVER_PORT=puerto-del-servidor-de-correo
EMAIL_SERVER_USER=usuario-del-servidor-de-correo
EMAIL_SERVER_PASSWORD=contraseña-del-servidor-de-correo
EMAIL_FROM=dirección-de-correo-del-remite
NEXTAUTH_SECRET=secreto-de-nextauth
NEXTAUTH_URL=url-de-nextauth
```

Inicia la aplicación:

```
npm run dev
```

Abre tu navegador y ve a http://localhost:3000 para ver la aplicación en funcionamiento.

## Conclusiones
Siguiendo estas instrucciones, deberías poder realizar el deploy local de la aplicación FollowCoin. Asegúrate de definir correctamente todas las variables de entorno necesarias antes de iniciar la aplicación.

Si tienes cualquier problema durante el proceso de deploy, consulta la documentación oficial de Next.js y asegúrate de tener las últimas versiones de todas las dependencias instaladas.
