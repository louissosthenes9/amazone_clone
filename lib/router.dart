import 'package:amazon_clone/features/auth/screens/auth_screen.dart';
import 'package:flutter/material.dart';

class RouteGenerator{
  static const String authScreen = "/authScreen";
  static const String randomPage = "/random";
  static const String homePage = "/";
  static Route<dynamic> generateRoute(RouteSettings routeSettings) {


    switch (routeSettings.name) {
      case authScreen:
        return MaterialPageRoute(
          builder: (_) => const AuthScreen(),
        );
      default:
        return MaterialPageRoute(
            settings: routeSettings,
            builder: (_) => const Scaffold(
              body: Center(child: Text("the screen doesn't exist")),
            ));
    }
  }

}

