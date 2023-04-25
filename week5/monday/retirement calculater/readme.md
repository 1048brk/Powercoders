//// Inputs:
Current age (integer)
Retirement age (integer)


/// Outputs:
Years left until retirement (integer)
Year when the user can retire (integer)

//// Process:

Calculate the years left until retirement by subtracting current age from retirement age
Calculate the year when the user can retire by adding the years left until retirement to the current year

///Constraints:

The user's current age and retirement age must be positive integers
The user's current age must be less than their retirement age
The retirement age must not exceed the maximum age of 120 years old (or any age that is considered the maximum retirement age in the country where the user lives)

/// Edge cases:

If the user enters a non-numeric value for their age or retirement age, the program will not work properly
If the user enters a negative value for their age or retirement age, the program will not work properly
If the user enters a retirement age that is less than their current age, the program will not work properly
If the user enters a retirement age that exceeds the maximum retirement age, the program will not work properly


Pseudo-code:
1. Get the current year
2. Prompt the user for their current age and retirement age and check if they are valid
3. Calculate the years left until retirement by subtracting current age from retirement age
4. Calculate the year when the user can retire by adding the years left until retirement to the current year
5. Display the output to the user
