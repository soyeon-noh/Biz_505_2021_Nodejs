-- pos_project
-- % : 어디에서나 접근가능
CREATE USER 'node'@'%' identified by '12341234';

-- 모든 권한 부여
GRANT ALL privileges ON *.* TO 'node'@'%';

-- DB생성
CREATE DATABASE posDB;

USE posdb;
DESC tbl_orders;
DESC tbl_products;

DROP TABLE tbl_orders;
DROP TABLE tbl_products;

SELECT * FROM tbl_orders;
SELECT * FROM tbl_products;


-- 2021-08-25 댓글
USE nodedb;
DESC tbl_replies;

DROP TABLE tbl_replies;
DROP TABLE tbl_bbs;


INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000001', '대왕김밥', 2500);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000002', '참치김밥', 3000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000003', '치즈김밥', 3000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000004', '돈까스김밥', 3500);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000005', '새우튀김김밥', 3500);

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000006', '돈까스', 7000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000007', '치즈돈까스', 7500);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000008', '고구마돈까스', 7500);

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000009', '우동', 5000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000010', '칼국수', 6000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000011', '팥칼국수', 7000);

-- UPDATE tbl_products
-- SET p_name = '팥칼국수'
-- WHERE p_code = 'P000000011';

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000012', '들깨칼국수', 7000);

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000013', '잔치국수', 6000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000014', '쫄면', 6000);

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000015', '떡국', 6000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000016', '만두국', 6000);

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000017', '물냉면', 6000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000018', '비빔냉면', 6000);

INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000019', '떡볶이', 4000);
INSERT INTO tbl_products(p_code, p_name, p_price)
VALUES ('P000000020', '치즈떡볶이', 5000);

