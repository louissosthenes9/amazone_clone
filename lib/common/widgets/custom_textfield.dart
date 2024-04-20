import 'package:flutter/material.dart';

class CustomTextField extends StatelessWidget{
  final TextEditingController controller;
  final String hintText;
  const CustomTextField({super.key,required this.controller,required this.hintText});
  
  @override
  Widget build(BuildContext context){
    return TextFormField(
      controller:TextEditingController(),
      decoration: InputDecoration(
        border: const OutlineInputBorder(
          borderSide:BorderSide(
              color:Colors.black,
          )
        ),
        enabledBorder: const OutlineInputBorder(
          borderSide:BorderSide(
               color:Colors.black,
         )
      ),
    ),
      validator:,
    );
  }
}