-- % : 어디에서나 접근가능
CREATE USER 'node'@'%' identified by '12341234';

-- 모든 권한 부여
GRANT ALL privileges ON *.* TO 'node'@'%';

-- DB생성
CREATE DATABASE nodeDB;

USE nodedb;
DESC tbl_bbs;

-- DROP TABLE tbl_bbs;
SELECT * FROM tbl_bbs;


-- 2021-08-25 댓글
USE nodedb;
DESC tbl_replies;

DROP TABLE tbl_replies;
DROP TABLE tbl_bbs;


-- 2021-08-31 pos기 만들기
USE nodedb;
SHOW TABLES;
DESC tbl_products;

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES
('P0001', '1000원 김밥', 1000),
('P0002', '참치김밥', 2000),
('P0003', '돈까스김밥', 2500),
('P0004', '라면', 3000),
('P0005', '치즈라면', 3500),
('P0006', '떡볶이', 3000),
('P0007', '라볶이', 3500),
('P0008', '돈까스', 7000),
('P0009', '잔치국수', 6000),
('P0010', '쫄면', 6000);

SELECT * FROM tbl_products;

DROP TABLE tbl_table_orders;

-- 2021-09-01 posV2
 USE nodedb;
 DROP TABLE tbl_table_orders;
 DROP TABLE tbl_products;
 
 SELECT * FROM tbl_table_orders;