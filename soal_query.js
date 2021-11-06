const { Pool } = require("pg")

const username = process.env['DB_USER']
const password = process.env['DB_PASSWORD']
const database = process.env['DB_WALLET']
const host = process.env['DB_HOST']

const pool = new Pool({
  user: username,
  host: host,
  database: database,
  password: password,
  port: 5432,
  connectionTimeMillis: 2000,
  max: 100
})
const queryCreateTableTransaksi = `
create table "Transaksi" (
	"Id" serial primary key,
	"Tanggal Order" date,
	"Status Pembayaran" varchar(255),
	"Tanggal Pembayaran" date
);`

const queryCreateTableDataTransaksi = `
create table "DetailTransaksi" (
	"Id" serial primary key,
	"Id_Transaksi" int,
	"Harga" int ,
	"Jumlah" int,
	"Subtotal" int,
	constraint fk_transaksi 
		foreign key("Id_Transaksi")
			references "Transaksi"("Id")
);
`