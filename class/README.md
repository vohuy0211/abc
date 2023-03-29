<!-- Mô tả thuật toán tính điểm trung bình -->
    BEGIN
        INPUT Math, Physics, Chemistry
            Average = (Math + Physics + Chemistry) / 3
        DISPLAY Averge
    END
<!-- Mô tả thuật toán chuyển dổi tiền tệ -->
    BEGIN
        INPUT 	      USD
        VND = USD * 23.000
        DISPLAY      VND
    END
<!-- Mô tả thuật toán tìm giá trị lớn nhất trong 3 số  -->
    BEGIN
        INPUT A, B, C
        IF A > B AND A > C
        DISPLAY A
        ELSE IF B > A AND B > C
        DISPLAY B
        ELSE C
    END
<!-- Mô tả thuật toán tìm giá trị lớn nhất -->
BEGIN
	INPUT n
	INPUT a1, a2, a3 … an
	max = a1, i = 2
		IF i > n	
		DISPLAY max	
		ELSE
			WHILE (ai > max)
			DO 		
  				DISPLAY max
			END DO
		i = i + 1
		END IF
END
<!-- Mô tả thuật toán có cấu trúc điều kiện -->
BEGIN
	INPUT point
	IF point >= 75
		DISPLAY “loại A”
	ELSE IF 60 <= point <= 
DISPLAY “loại B”
	ELSE IF point >= 45
		DISPLAY “loại C”
	ELSE IF point >= 35
		DISPLAY “loại D”
	ELSE
		DISPLAY “loại E”
	END IF
END