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



@WebServlet("/menu-form-handler")
public class MenuFormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
    
    
    // Get itemName 
    String itemName = request.getParameter("itemName");
    // Get itemPrice
    String itemPrice = request.getParameter("itemPrice");
    // Create a time stamp
    long timestamp = System.currentTimeMillis();



        // Store data to Datastore 
    // Create Datastore instance
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    // Create a task
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("MenuItem");
    
    String id = request.getParameter("itemID");
    long idNum = 0;

        // if itemID doesn't exist, then create a new entity
        if (id==null){
            // Create entity
            FullEntity taskEntity = Entity.newBuilder(keyFactory.newKey())
            .set("itemName", itemName)
            .set("itemPrice", itemPrice)
            .set("timestamp", timestamp)
            .build();

            // Store data
            datastore.put(taskEntity);
            
        } else{  // if itemID exists, then update that enntity
            idNum = Long.parseLong(id);
            Key taskKey = datastore.newKeyFactory().setKind("MenuItem").newKey(idNum);
            // Prepares the new entity
            Entity task = Entity.newBuilder(taskKey)
            .set("itemName", itemName)
            .set("itemPrice", itemPrice)
            .set("timestamp", timestamp)
            .build();
            datastore.put(task);
 
        }

    // Returned to front page after submiting Data
    response.sendRedirect("/index.html");
  }
}