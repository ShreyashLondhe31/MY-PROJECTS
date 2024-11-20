package bankmanagementsystem;
import javax.swing.*;
import java.awt.*;
import java.util.*;
import com.toedter.calendar.*;

public class SignUpOne extends JFrame {

	SignUpOne() {
	        Random ran = new Random();
	        long random = Math.abs((ran.nextLong() % 9000L) + 1000L);

	        JLabel formno = new JLabel("APPLICATION FORM NO: " + random);
	        formno.setFont(new Font("Raleway", Font.BOLD, 38));
	        formno.setBounds(140, 20, 600, 40);
	        add(formno);

	        JLabel personalDetails = new JLabel("Page 1 : Personal Details");
	        personalDetails.setFont(new Font("Raleway", Font.BOLD, 22));
	        personalDetails.setBounds(290, 80, 400, 30);
	        add(personalDetails);

	        JLabel name = new JLabel("First name: ");
	        name.setFont(new Font("Raleway", Font.BOLD, 20));
	        name.setBounds(100, 140, 400, 30);
	        add(name);

	        JTextField nameTextField = new JTextField();
	        nameTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        nameTextField.setBounds(300, 140, 400, 30);
	        nameTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(nameTextField);

	        JLabel fatherName = new JLabel("Father's name: ");
	        fatherName.setFont(new Font("Raleway", Font.BOLD, 20));
	        fatherName.setBounds(100, 190, 400, 30);
	        add(fatherName);

	        JTextField fatherNameTextField = new JTextField();
	        fatherNameTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        fatherNameTextField.setBounds(300, 190, 400, 30);
	        fatherNameTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(fatherNameTextField);

	        JLabel lastName = new JLabel("Last name: ");
	        lastName.setFont(new Font("Raleway", Font.BOLD, 20));
	        lastName.setBounds(100, 240, 400, 30);
	        add(lastName);

	        JTextField lastNameTextField = new JTextField();
	        lastNameTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        lastNameTextField.setBounds(300, 240, 400, 30);
	        lastNameTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(lastNameTextField);

	        JLabel dob = new JLabel("Date of birth: ");
	        dob.setFont(new Font("Raleway", Font.BOLD, 20));
	        dob.setBounds(100, 290, 400, 30);
	        add(dob);
	        
	        JDateChooser dateChooser = new JDateChooser();
	        dateChooser.setBounds(300, 290, 200, 30);
	        add(dateChooser);
	         

	        JLabel gender = new JLabel("Gender: ");
	        gender.setFont(new Font("Raleway", Font.BOLD, 20));
	        gender.setBounds(100, 340, 400, 30);
	        add(gender);
	        
	        JRadioButton male = new JRadioButton("Male");
	        male.setBounds(300, 340, 60, 30);
	        male.setBackground(Color.WHITE);
	        add(male);
	        
	        JRadioButton female = new JRadioButton("Female");
	        female.setBounds(450, 340, 120, 30);
	        female.setBackground(Color.WHITE);
	        add(female);
	        
	        ButtonGroup genderGroup = new ButtonGroup();
	        genderGroup.add(male);
	        genderGroup.add(female);

	        JLabel email = new JLabel("Email: ");
	        email.setFont(new Font("Raleway", Font.BOLD, 20));
	        email.setBounds(100, 390, 400, 30);
	        add(email);

	        JTextField emailTextField = new JTextField();
	        emailTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        emailTextField.setBounds(300, 390, 400, 30);
	        emailTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(emailTextField);

	        JLabel marital = new JLabel("Marital status: ");
	        marital.setFont(new Font("Raleway", Font.BOLD, 20));
	        marital.setBounds(100, 440, 400, 30);
	        add(marital);
	        
	        JRadioButton married = new JRadioButton("Married");
	        married.setBounds(300, 440, 120, 30);
	        married.setBackground(Color.WHITE);
	        add(married);
	        
	        JRadioButton unmarried = new JRadioButton("Unmarried");
	        unmarried.setBounds(440, 440, 120, 30);
	        unmarried.setBackground(Color.WHITE);
	        add(unmarried);
	        
	        JRadioButton other = new JRadioButton("other");
	        other.setBounds(580, 440, 120, 30);
	        other.setBackground(Color.WHITE);
	        add(other);
	        
	        ButtonGroup martialGroup = new ButtonGroup();
	        martialGroup.add(unmarried);
	        martialGroup.add(married);
	        martialGroup.add(other);

	        JLabel address = new JLabel("Address: ");
	        address.setFont(new Font("Raleway", Font.BOLD, 20));
	        address.setBounds(100, 490, 400, 30);
	        add(address);

	        JTextField addressTextField = new JTextField();
	        addressTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        addressTextField.setBounds(300, 490, 400, 30);
	        addressTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(addressTextField);

	        JLabel City = new JLabel("City: ");
	        City.setFont(new Font("Raleway", Font.BOLD, 20));
	        City.setBounds(100, 540, 400, 30);
	        add(City);

	        JTextField cityTextField = new JTextField();
	        cityTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        cityTextField.setBounds(300, 540, 400, 30);
	        cityTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(cityTextField);

	        JLabel State = new JLabel("State: ");
	        State.setFont(new Font("Raleway", Font.BOLD, 20));
	        State.setBounds(100, 590, 400, 30);
	        add(State);

	        JTextField stateTextField = new JTextField();
	        stateTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        stateTextField.setBounds(300, 590, 400, 30);
	        stateTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(stateTextField);

	        JLabel Pincode = new JLabel("Pincode: ");
	        Pincode.setFont(new Font("Raleway", Font.BOLD, 20));
	        Pincode.setBounds(100, 640, 400, 30);

	        add(Pincode);

	        JTextField pincodeTextField = new JTextField();
	        pincodeTextField.setFont(new Font("Railway", Font.BOLD, 14));
	        pincodeTextField.setBounds(300, 640, 400, 30);
	        pincodeTextField.setCursor(new Cursor(Cursor.TEXT_CURSOR));
	        add(pincodeTextField);
	        
	        JButton next = new JButton("NEXT");
	        next.setBounds(600, 700, 100, 35);
	        next.setFont(new Font("Raleway", Font.BOLD, 14));
	        next.setForeground(Color.WHITE);
	        next.setBackground(Color.BLACK);
	        add(next);

	        getContentPane().setBackground(Color.WHITE);

	        setLayout(null);
	        setVisible(true);
	        setSize(850, 800);
	        setLocation(350, 50);
	        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    }

	    public static void main(String[] args) {
	        new SignUpOne();
	    }
}
