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
