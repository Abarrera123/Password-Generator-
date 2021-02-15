# Password-Generator-
--Website's Function--
This random password generator allows you to create a password from 8 to 128 characters in length. The website will prompt the user to select if they would like lower case, upper case, numerical, and/ or special characters included in their password. Once the user answers all the prompts a password is generated that meets the user's paramiters. 

--Code Explination--
1. In js the first step was to created arrays of all possible characters that could be included in the password. These arrays are located on line 2-88.
2. Next I created a function that collects the information provided by the user to select what options the funtion will have. Lines 92-108 allows the user to be prompted to see how long the password will be. If the user does not enter a valid input between 8 and 128 then the user will be prompted again to enter a valid value. Lines 111-125 promt the user on what characters they want in their password. Lines 127-135 tell the user that if they did not confirm  any of the possible variables that they would need to choose at least one.
3. Next I created an onject that will store the values of the elements in the password ( Lines 139-1147)
4. Next I created a function that generates a picks a random index of the possible arrays listed in the first step(lines 150-154).
5. Next i created a function to generate the password. This is done by creating empty arrays called results, possibleCharacters, and guaranteedCharacter (lines 161-165). The function will check if the user has selected the option of possible characters. If one of the possible characters has been selected then the function will look through all possible choices in the array and then push a random character from that array to a new one(lines 168 - 188).
6. Once all the possible characters have pushed into a new array a for loop will iterate over the password length and randomly select an index said array. (lines 191-194)
7. Next a for loop is added that allows one of each guaranteed character to be mixed in the empty array name result(lines 196-199).
8. A return is then added to join the characters into a string(line 201)
9. Next I added a reference to the html id #generate (line 205)
10.Next I added a function that will write the password. This function stores the result from the generate password listed above into a variable named password. A variable named passwordText is set equal to the refrence of the teaxtarea in the html code. Lastly the passwordText.value is set to the password variable which will show it on the screen(lines 207-212).
10. Lastly I added an event to listen for a click to start the prompts to create the password. 

Link to git hub pages [https://abarrera123.github.io/Password-Generator-/].