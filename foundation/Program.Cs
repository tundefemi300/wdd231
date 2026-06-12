using System;

class Program
{
    static void Main(string[] args)
    {
        Address address1 = new Address(
            "123 Main St",
            "Phoenix",
            "AZ",
            "USA");

        Customer customer1 = new Customer(
            "John Smith",
            address1);

        Order order1 = new Order(customer1);

        order1.AddProduct(
            new Product("Laptop", "P100", 800, 1));

        order1.AddProduct(
            new Product("Mouse", "P101", 25, 2));

        Address address2 = new Address(
            "45 King Road",
            "Toronto",
            "ON",
            "Canada");

        Customer customer2 = new Customer(
            "Mary Johnson",
            address2);

        Order order2 = new Order(customer2);

        order2.AddProduct(
            new Product("Monitor", "P200", 300, 1));

        order2.AddProduct(
            new Product("Keyboard", "P201", 50, 1));

        Console.WriteLine("ORDER 1");
        Console.WriteLine("----------------");
        Console.WriteLine("Packing Label:");
        Console.WriteLine(order1.GetPackingLabel());

        Console.WriteLine("Shipping Label:");
        Console.WriteLine(order1.GetShippingLabel());

        Console.WriteLine($"Total Cost: ${order1.CalculateTotalCost()}");

        Console.WriteLine();

        Console.WriteLine("ORDER 2");
        Console.WriteLine("----------------");
        Console.WriteLine("Packing Label:");
        Console.WriteLine(order2.GetPackingLabel());

        Console.WriteLine("Shipping Label:");
        Console.WriteLine(order2.GetShippingLabel());

        Console.WriteLine($"Total Cost: ${order2.CalculateTotalCost()}");
    }
}