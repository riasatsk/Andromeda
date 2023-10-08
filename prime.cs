using System;
using System.Diagnostics;

class Program
{
    static bool IsPrime(int n)
    {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;

        for (int i = 5; i * i <= n; i += 6)
        {
            if (n % i == 0 || n % (i + 2) == 0)
                return false;
        }

        return true;
    }

    static void Main()
    {
        Stopwatch stopwatch = new Stopwatch();
        stopwatch.Start();

        int[] primes = new int[1000000];
        primes[0] = 2;
        primes[1] = 3;
        int primeCount = 2;

        for (int i = 5; i < 1000000; i++)
        {
            if (IsPrime(i))
            {
                primes[primeCount] = i;
                primeCount++;
                Console.WriteLine(i);
            }
        }

        stopwatch.Stop();
        TimeSpan executionTime = stopwatch.Elapsed;

        Console.WriteLine("Execution Time: " + executionTime.TotalSeconds + " seconds");
    }
}
