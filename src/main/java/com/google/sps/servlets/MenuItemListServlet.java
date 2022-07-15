
package com.google.sps.servlets;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.Query;
import com.google.cloud.datastore.QueryResults;
import com.google.cloud.datastore.StructuredQuery.OrderBy;
import com.google.gson.Gson;
// import com.google.sps.data.MenuItem;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet responsible for listing tasks. */
@WebServlet("/list-menuItems")
public class MenuItemListServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    //   Create Datastore instance
    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    //   Run query to get Entity lists from DataStore
    Query<Entity> query =
        Query.newEntityQueryBuilder().setKind("MenuItem").setOrderBy(OrderBy.desc("timestamp")).build();
    QueryResults<Entity> results = datastore.run(query);
    //   Declare an empty array list
    ArrayList<String> menulist = new ArrayList<String> ();
    //   Pass the properties to the array from the Entity list
    while (results.hasNext()) {
      Entity entity = results.next();

      String id = String.valueOf(entity.getKey().getId());
      String itemName = entity.getString("itemName");
      String itemPrice = entity.getString("itemPrice");

      menulist.add(id);
      menulist.add(itemName);
      menulist.add(itemPrice);
   
    }
    // Send back the array list in JSON format
    Gson gson = new Gson();

    response.setContentType("application/json;");
    response.getWriter().println(gson.toJson(menulist));
  }
}
