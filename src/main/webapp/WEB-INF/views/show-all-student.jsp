<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/sql" prefix="sql"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>List Of  Records</title>
</head>

<style>
body{
background-image:url('https://image.shutterstock.com/shutterstock/photos/345101687/display_1500/stock-photo-feedback-concept-with-hand-pressing-a-button-on-blurred-abstract-background-345101687.jpg')
}
</style>

<body >


	<sql:setDataSource var="smsDB" driver="com.mysql.jdbc.Driver"
		url="jdbc:mysql://localhost:3306/sms" user="root" password="root" />

	

<sql:query var="listStudent" dataSource="${smsDB}">
SELECT * FROM student;
</sql:query>

	<div align="center">
		<table border="1" cellpadding="10">
			<caption>
				<h2>List of Student</h2>
			</caption>
			<tr>
			    <th>Admission Code</th>
				<th>AdharCard</th>
			    <th>StudentName</th>
				<th>ClassName</th>				
				<th>subject1</th>
				<th>subject2</th>
				<th>subject3</th>
				<th>subject4</th>
				<th>subject5</th>
				<th>subject6</th>
				<th>Grade</th>
				<th>salary</th>
			</tr>
					<c:forEach var="users" items="${listStudent.rows}">
				<tr>
			    	<td><c:out value="${users.admission_code}" /></td>
				    <td><c:out value="${users.adhar_card}" /></td>
				    <td><c:out value="${users.student_name}" /></td>
					<td><c:out value="${users.class_name}" /></td>
					<td><c:out value="${users.subject1}" /></td>
					<td><c:out value="${users.subject2}" /></td>
					<td><c:out value="${users.subject3}" /></td>
					<td><c:out value="${users.subject4}" /></td>
					<td><c:out value="${users.subject5}" /></td>
					<td><c:out value="${users.subject6}" /></td>			
					<td><c:out value="${users.grade}" /></td>				
					
					
				</tr>
			</c:forEach>
		</table>
	</div>
</body>
</html>