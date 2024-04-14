import 'package:amazon_clone/constants/global_variables.dart';
import 'package:amazon_clone/features/auth/screens/auth_screen.dart';
import 'package:amazon_clone/router.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'DukaOnline',
      theme: ThemeData(
        colorScheme: const ColorScheme.light(
          primary: Color.fromRGBO(255, 153, 0, 1),
        ),
        scaffoldBackgroundColor: GlobalVariables.backgroundColor,
        appBarTheme: const AppBarTheme(
          elevation: 0,
          iconTheme: IconThemeData(color: Colors.black),
          backgroundColor: Colors.orange, // Set app bar background color here
        ),
        useMaterial3: true,
      ),
      onGenerateRoute: ((settings) => generateRoute(settings)),
      home: Scaffold(

        appBar: AppBar(
          title: const Text('Duka online'),
          backgroundColor: Colors.orange,
        ),
        body: Column(
          children: [
            const Center(
              child: Text(
                'Flutter Demo Home Page',
              ),
            ),
            ElevatedButton(
              onPressed: () {
                Navigator.of(context).pushNamed(AuthScreen.routeName);
              },
              child: const Text("click"), // Add parentheses here
            ),
          ],
        ),
      ),
    );
  }
}
