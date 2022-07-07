package com.google.sps.servlets;
import com.google.gson.Gson;
import java.util.ArrayList;
import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
   
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
     //Create a Greeting arraylist
    ArrayList<String> mylist = new ArrayList<String> ();
    mylist.add("I like Boba.");
    mylist.add("I play Fortnite.");
    mylist.add("I play League of Legends.");
    mylist.add("My favorite Movie is Your Name.");
    mylist.add("I like programming.");
    //Convert array list to json 
    String json = new Gson().toJson(mylist);
    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }

}
