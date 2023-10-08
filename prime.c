#include <stdio.h>
#include <stdbool.h>
#include <time.h>

int main() {
    clock_t start_time = clock();

    int prime[1000000];
    prime[0] = 2;
    prime[1] = 3;
    int prime_count = 2;

    for (int i = 5; i < 1000000; i++) {
        bool possiblePrime = true;

        for (int j = 0; j < prime_count; j++) {
            if (i % prime[j] == 0) {
                possiblePrime = false;
                break;
            }
        }

        if (possiblePrime) {
            prime[prime_count] = i;
            prime_count++;
            printf("%d\n", i);
        }
    }

    clock_t end_time = clock();
    double execution_time = (double)(end_time - start_time) / CLOCKS_PER_SEC;
    printf("Execution Time: %f seconds\n", execution_time);

    return 0;
}
