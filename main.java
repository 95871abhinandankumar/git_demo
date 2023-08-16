import java.util.*;


enum Role{
    ADMIN, STUDENT
}

enum avail{
    AVAILABLE, UNAVAILBALE
}

class User{

    String userName;
    String password;
    Role role;
    int id;


    // Register the user
    User(String userName, String password, int id, Role r1){
        this.userName = userName;
        this.password = password;
        this.role = r1;
        this.id = id;
    }

}

class Book{

    String title;
    String author;
    int serial_no;
    int total_count = 0;
    // private int current_serial_no = 0; 


    // To add book
    Book(String title, String author, int serial_no){
        this.title = title;
        this.author = author;
        this.serial_no = serial_no;
        this.total_count+=1;
    }

    // To update book   
    public void updateBook(String title, User author){
        
    }



}


class main{
    static int bookserialNumber = 1;
    static int userSerialNumer = 1;
    final int adminPassword = 123;



    // To search book
    public static Book search(String title, String authorName, Map<Integer, Book> books){
        for (Map.Entry<String,String> entry : books.entrySet()) {
            Book book2 = entry.getValue();
            if(book2.title.equals(title) && book2.author.equals(authorName))
                return book2;
        }
        return null;

    }

    public static void showBookCatalog(static Map<Integer, Book> book3){
        for (Map.Entry<String,String> entry : book3.entrySet()) {
            System.out.println();
        }

    }
    public static void main(String[] args) {

        Map<Integer, Book> books = new HashMap<>();
        Map<Integer, User> user = new HashMap<>();
        HashSet<String> uniqueUserName = new HashSet<>();
        System.out.println("Welcome to Gainsight Library");
        System.out.println("Instruction :\nTo login as student user : 1\nTo login as admin : 2");
        Scanner sc = new Scanner(System.in);

        int t1 = sc.nextInt();

        switch(t1){
            case 1:
                System.out.println("Instruction :\nTo register : 1\nTo login : 2");

                int t2 = sc.nextInt();
                switch(t2){
                    case 1:
                        boolean b1 = true;
                        while(b1){
                            System.out.println("Please enter the user name :");
                            String username = sc.nextLine();

                            if(uniqueUserName.contains(username))
                                continue;

                            System.out.println("Please enter password");
                            String password = sc.nextLine();
                            User user1 = new User(username, password, userSerialNumer, Role.STUDENT);
                            user.put(userSerialNumer, user1);
                            userSerialNumer +=1;

                            b1 = false;
                        }

                        break;
                    case 2:
                        System.out.println("Instruction :\nTo add book : 1\nTo delete Book : 2\n To update book : 3\nBook catalog: 4");
                        int t4 = sc.nextInt();
                        switch(t4){
                            case 1:
                                System.out.println("Enter book title, author name");
                                String booktitle = sc.nextLine();
                                String authorname = sc.nextLine();

                                break;
                        }

                        break;
                        
                }
                break;
            case 2:
                break;

        }

        
    }
}