package com.google.sps.servlets;

// imoport datastore liberary
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;




@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String textValue = request.getParameter("text-input");
    // get name 
    String name = request.getParameter("Name");
    // get email 
    String email = request.getParameter("Email");

    long timestamp = System.currentTimeMillis();


        // Store data to Datastore 
    // Create Datastore instance
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    // Create a task
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Task");

    // Create entity
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
        .set("textValue", textValue)
        .set("name", name)
        .set("email", email)
        .set("timestamp", timestamp)
        .build();

    // Store data
    datastore.put(taskEntity);

    //String textValue = request.getParameter("data");
    // Print the value so you can see it in the server logs.
    //System.out.println("Name: " +name + "Email: " + email +"You submitted: " + textValue);

    // Write the value to the response so the user can see it.
    //response.getWriter().println("Name: " +name + "Email: " + email +"You submitted: " + textValue);
    response.sendRedirect("/index.html");
  }
}