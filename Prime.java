public class Prime {
    public static boolean isPrime(int n) {
        if (n <= 1) {
            return false;
        }
        if (n <= 3) {
            return true;
        }
        if (n % 2 == 0 || n % 3 == 0) {
            return false;
        }
        int i = 5;
        while (i * i <= n) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
            i += 6;
        }
        return true;
    }

    public static void main(String[] args) {
        long startTime = System.currentTimeMillis();

        int[] primes = new int[1000000];
        primes[0] = 2;
        primes[1] = 3;
        int primeCount = 2;

        for (int i = 5; i < 1000000; i++) {
            if (isPrime(i)) {
                primes[primeCount] = i;
                primeCount++;
                System.out.println(i);
            }
        }

        long endTime = System.currentTimeMillis();
        double executionTime = (endTime - startTime) / 1000.0; // Convert to seconds
        System.out.println("Execution Time: " + executionTime + " seconds");
    }
}
