package bankmanagementsystem;

import java.util.*;
import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import com.toedter.calendar.*;

public class Login extends JFrame implements ActionListener{
	
	JButton login, clear, signUp;
	JTextField cardNoTextField;
	JPasswordField pinPasswordField;

	public Login(){
		
			

	        ImageIcon i1 = new ImageIcon(ClassLoader
	                .getSystemResource("icons/logo.jpg"));
	        Image i2 = i1.getImage().getScaledInstance(100, 100, Image.SCALE_DEFAULT);
	        ImageIcon i3 = new ImageIcon(i2);

	        JLabel label = new JLabel(i3);
	        label.setBounds(150, 10, 100, 100);
	        add(label);

	        JLabel text = new JLabel("Welcome to ATM");
	        text.setFont(new Font("Osward", Font.BOLD, 38));
	        add(text);
	        text.setBounds(250, 40, 400, 40);

	        JLabel CardNo = new JLabel("Card No:");
	        CardNo.setFont(new Font("Raleway", Font.BOLD, 25));
	        add(CardNo);
	        CardNo.setBounds(170, 150, 400, 30);

	        cardNoTextField = new JTextField();
	        cardNoTextField.setBounds(300, 150, 250, 30);
	        cardNoTextField.setFont(new Font("Arial", Font.BOLD, 14));
	        add(cardNoTextField);

	        JLabel Pin = new JLabel("PIN:");
	        Pin.setFont(new Font("Raleway", Font.BOLD, 25));
	        Pin.setBounds(170, 220, 400, 30);
	        add(Pin);

	        pinPasswordField = new JPasswordField();
	        pinPasswordField.setBounds(300, 220, 250, 30);
	        pinPasswordField.setFont(new Font("Arial", Font.BOLD, 14));
	        add(pinPasswordField);

	        login = new JButton("SIGN IN");
	        login.setBounds(300, 300, 100, 30);
	        login.setBackground(Color.BLACK);
	        login.setForeground(Color.WHITE);
	        login.addActionListener(this);
	        add(login);

	        clear = new JButton("CLEAR");
	        clear.setBounds(430, 300, 100, 30);
	        clear.setBackground(Color.BLACK);
	        clear.setForeground(Color.WHITE);
	        clear.addActionListener(this);
	        add(clear);

	        signUp = new JButton("SIGN UP");
	        signUp.setBounds(300, 350, 230, 30);
	        signUp.setBackground(Color.BLACK);
	        signUp.setForeground(Color.WHITE);
	        signUp.addActionListener(this);
	        add(signUp);

	        getContentPane().setBackground(Color.WHITE);
	        setLayout(null);
	        setTitle("AUTOMATED TELLER MACHINE");
	        setSize(800, 450);
	        setVisible(true);
	        setLocation(350, 200);
	        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    }
		public void actionPerformed(ActionEvent e) {
			if (e.getSource() == clear) {
				cardNoTextField.setText("");
				pinPasswordField.setText("");
        } else if (e.getSource() == login) {

        } else if (e.getSource() == signUp) {

        }
	}
	    
	 
	public static void main(String[] args) {
		new Login();

	}
}

			
		
		
	

	


