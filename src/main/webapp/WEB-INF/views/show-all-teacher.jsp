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
<body>
	<sql:setDataSource var="smsDB" driver="com.mysql.jdbc.Driver"
		url="jdbc:mysql://localhost:3306/sms" user="root" password="root" />

	

<sql:query var="listTeacher" dataSource="${smsDB}">
SELECT * FROM teacher;
</sql:query>

	<div align="center">
		<table border="1" cellpadding="10">
			<caption>
				<h2>List of Teachers</h2>
			</caption>
			<tr>
			    <th>TeacherID</th>
				<th>adharCard</th>
				<th>name</th>				
				<th>qualification</th>
				<th>gender</th>
				<th>salary</th>
			</tr>
					<c:forEach var="users" items="${listTeacher.rows}">
				<tr>
			    	<td><c:out value="${users.teacher_id}" /></td>
				    <td><c:out value="${users.adhar_card}" /></td>
				    <td><c:out value="${users.teacher_name}" /></td>
					<td><c:out value="${users.qualification}" /></td>
					<td><c:out value="${users.gender}" /></td>
					<td><c:out value="${users.salary}" /></td>				
					
					
				</tr>
			</c:forEach>
		</table>
	</div>
</body>
</html>