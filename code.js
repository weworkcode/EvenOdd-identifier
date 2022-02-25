import java.util.Scanner;

public class EvenOdd {
    public static void main(String[] args) {
    	Scanner in = new Scanner(System.in);

        int input;
        System.out.println ("Input a number to check if even or odd: ");

        input = in.nextInt();

        if (input % 2 == 0) {
            System.out.println (input + " is an even number.");
        } else {
            System.out.println (input + " is an odd number.");
        }
    }
}
