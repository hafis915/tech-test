create table "Transaksi" (
	"Id" serial primary key,
	"Tanggal Order" TIMESTAMP without time zone NULL,
	"Status Pembayaran" varchar(255),
	"Tanggal Pembayaran" TIMESTAMP without time zone NULL
);

drop table "Transaksi" ;
drop table "DetailTransaksi" ;
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

INSERT INTO "Transaksi"
("Tanggal Order", "Status Pembayaran", "Tanggal Pembayaran")
VALUES('2020-12-01 11:30:00', 'Lunas', '2020-12-01 12:00:00');

INSERT INTO "Transaksi"
("Tanggal Order", "Status Pembayaran", "Tanggal Pembayaran")
VALUES('2020-12-02 10:30:00', 'Pending', null);

INSERT INTO "DetailTransaksi"
("Id_Transaksi", "Harga", "Jumlah", "Subtotal")
VALUES(1, 10000, 2, 20000);

INSERT INTO "DetailTransaksi"
("Id_Transaksi", "Harga", "Jumlah", "Subtotal")
VALUES(2, 6250, 4, 25000);

select t."Id" , t."Tanggal Order" , t."Status Pembayaran" as "Status",
t."Tanggal Pembayaran" as "Tanggal Pembayaran" , dt."Subtotal" as "Total",
dt."Jumlah" as "Jumlah_barang"
from "Transaksi" t 
inner join "DetailTransaksi" dt on t."Id"  = dt."Id_Transaksi" ;
