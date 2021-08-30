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
