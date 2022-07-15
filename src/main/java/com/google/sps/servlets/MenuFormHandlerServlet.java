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




@WebServlet("/menu-form-handler")
public class MenuFormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get itemName 
    String itemName = request.getParameter("itemName");
    // Get itemPrice
    String itemPrice = request.getParameter("itemPrice");

    long timestamp = System.currentTimeMillis();


        // Store data to Datastore 
    // Create Datastore instance
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    // Create a task
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("MenuItem");

    // Create entity
    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
        .set("itemName", itemName)
        .set("itemPrice", itemPrice)
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