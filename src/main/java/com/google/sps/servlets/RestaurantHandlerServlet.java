package com.google.sps.servlets;

// imoport datastore liberary
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;
import com.google.cloud.datastore.Key;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;



@WebServlet("/restaurant-form-handler")
public class RestaurantHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    


    // Get restaurantInfo
    String restaurantName = request.getParameter("restaurantName");
    String restaurantAddress = request.getParameter("restaurantAddress");
    String phoneNumber = request.getParameter("phoneNumber");

    // Create a time stamp
    long timestamp = System.currentTimeMillis();

    // Store data to Datastore 
    // Create Datastore instance
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    // Create a task
    KeyFactory keyFactory2 = datastore.newKeyFactory().setKind("ResInfo");
    
            FullEntity taskEntity2 = Entity.newBuilder(keyFactory2.newKey())
            .set("restaurantName", restaurantName)
            .set("restaurantAddress", restaurantAddress)
            .set("phoneNumber", phoneNumber)
            .set("timestamp",timestamp)
            .build();
            
            datastore.put(taskEntity2);



    // Returned to front page after submiting Data
    response.sendRedirect("/index.html");
  }
}
