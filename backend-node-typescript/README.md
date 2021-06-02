# electroic-product-api

Nodejs api with seneca for microservices that uses mongodb as database

## Installation

Copy `.env.dist` to `.env` and use it to specify mongodb properties

```
cp .env.dist .env
```

Run mongo db using docker compose

```
docker-compose up -d
```

Install npm packages form package.json (I am expecting node and npm installed in the system)

```
npm install
```

To compile the typescript run

```
npm run build
```

TS files will be compiled and builds will be in `dist` folder

So, to start the application

```
npm run start
```

Database service will start at port 10101 and gateway service will be live on port 3000

To add product send a post request to following endpoint with all attributes of a product
i.e title, description, price, image  the request can be sent through postman as well.

An example using curl can be the following, simple copy paste into the terminal and enter should do

```
curl -X POST -H "Content-Type: application/json" \
 -d '{
"title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
"price": 6004,
"description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
"image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
}' \
 http://localhost:5000/api/product/add
```

```
curl -X POST -H "Content-Type: application/json" \
 -d '{
"title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
"price": 109,
"description": "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
"image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg"
}' \
 http://localhost:5000/api/product/add
```

```
curl -X POST -H "Content-Type: application/json" \
 -d '{
"title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
"price": 109,
"description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
"image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg"
}' \
 http://localhost:5000/api/product/add
```
```
curl -X POST -H "Content-Type: application/json" \
 -d '{
"title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
"price": 114,
"description": "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
"image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg"
}' \
 http://localhost:5000/api/product/add
```


Run this on browser to see all added products.

http://localhost:5000/api/product/all


