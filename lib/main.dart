import 'package:amazon_clone/constants/global_variables.dart';
import 'package:flutter/material.dart';
import 'package:amazon_clone/router.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      onGenerateTitle: (context) => "Duka Online",
      initialRoute: RouteGenerator.homePage,
      onGenerateRoute: RouteGenerator.generateRoute,
      debugShowCheckedModeBanner: false,
      title: 'Duka online ',
      theme: ThemeData(
        appBarTheme: const AppBarTheme(
            elevation: 0, iconTheme: IconThemeData(color: Colors.black)),
        scaffoldBackgroundColor: GlobalVariables.backgroundColor,
        colorScheme:
            ColorScheme.fromSeed(seedColor: GlobalVariables.secondaryColor),
        useMaterial3: true,
      ),
      home: const HomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.title});
  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: const [
          Padding(
            padding: EdgeInsets.only(right: 20),
            child: Icon(Icons.info),
          ),
        ],

        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: const Text(
          "Duka online",
          style: TextStyle(color: Colors.white),
        ),
      ),
      drawer: const Drawer(),
      body: Center(
          child: ElevatedButton(
        child: const Text("Go to signin page"),
        onPressed: () =>
            Navigator.of(context)?.pushNamed(RouteGenerator.authScreen),
      )),
    );
  }
}
