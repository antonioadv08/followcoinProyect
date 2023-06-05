FollowCoin
FollowCoin es un proyecto desarrollado en Next.js que utiliza una base de datos MongoDB Atlas y diversas APIs para obtener información de criptomonedas, noticias y datos de mercado. También utiliza variables de entorno para la autenticación social de GitHub y Google, así como para la autenticación de NextAuth y el servidor SMTP de Gmail de Google.

Requisitos previos
Para poder desplegar FollowCoin en local, necesitarás tener instalado lo siguiente:

Node.js
MongoDB Atlas
API Key de CoinMarketCap
API Key de Binance
API Key de Newsdata
Configuración
Clona el repositorio de FollowCoin:
Copy
git clone https://github.com/tu-usuario/followcoin
Abre el archivo .env.example en un editor de texto y renómbralo como .env.

En el archivo .env, configura las siguientes variables de entorno con tus propias claves API:

Copy
NEXT_PUBLIC_COINMARKETCAP_API_KEY=your-coinmarketcap-api-key
NEXT_PUBLIC_BINANCE_API_KEY=your-binance-api-key
NEXT_PUBLIC_NEWSDATA_API_KEY=your-newsdata-api-key
Configura las variables de entorno para la autenticación social de GitHub y Google en el archivo .env. Para obtener más información sobre cómo configurar estas variables de entorno, consulta la documentación de NextAuth.js.

Configura las variables de entorno para el servidor SMTP de Gmail de Google en el archivo .env. Para obtener más información sobre cómo configurar estas variables de entorno, consulta la documentación de Nodemailer.

Configura la conexión a la base de datos MongoDB Atlas en el archivo mongo.js. Para obtener más información sobre cómo configurar la conexión a MongoDB Atlas, consulta la documentación de MongoDB Atlas.

Ejecución
Abre una terminal en el directorio raíz del proyecto.

Ejecuta el siguiente comando para instalar las dependencias del proyecto:

Copy
npm install
Ejecuta el siguiente comando para iniciar el servidor de desarrollo de Next.js:
Copy
npm run dev
Abre un navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.
