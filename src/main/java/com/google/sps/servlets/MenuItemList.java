package com.google.sps.servlets;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/menuItems")
public class MenuItemList extends HttpServlet {
   
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
     //Hard coded the array of fake data ["001","Spegatti",12, "002", "Pasta",  13, "003", "Fettuccine ", 14,"004", "Coke", 3]
    ArrayList<String> menulist = new ArrayList<String> ();
    menulist.add("001");
    menulist.add("Spegatti");
    menulist.add("12");
    menulist.add("002");
    menulist.add("Pasta");
    menulist.add("13");
    menulist.add("003");
    menulist.add("Fettucine");
    menulist.add("14");
    menulist.add("004");
    menulist.add("Coke");
    menulist.add("3");


    //Convert array list to json 
    String json = new Gson().toJson(menulist);
    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

}
