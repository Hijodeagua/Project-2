
CREATE TABLE breweries (
"id" varchar primary key,
"name" varchar,
"city" varchar,
"state" varchar,
country varchar
);

select * from breweries

create table beer (
"beer_id" varchar primary key,
"brewery_id" varchar,
"name" varchar
-- "cat_id" int,
-- "style_id" decimal,
-- "abv" int,
-- "ibu" int,
-- "srm" int,
-- "upc" int
	);
	
select * from beer

create table categories (
"id" varchar (3)primary key,
cat_name varchar (30)
);

select * from categories

create table styles (
"id" varchar primary key,
cat_id varchar,
style_name varchar 
	);
	
select * from styles

create table geocodes (
"id" varchar primary key,
brewy_id varchar,
latitude decimal,
longitude decimal
);

select * from geocodes



	