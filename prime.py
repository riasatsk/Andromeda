import time

def is_prime(n):
    if n <= 1:
        return False
    if n <= 3:
        return True
    if n % 2 == 0 or n % 3 == 0:
        return False
    i = 5
    while i * i <= n:
        if n % i == 0 or n % (i + 2) == 0:
            return False
        i += 6
    return True

start_time = time.time()

primes = [2, 3]
for i in range(5, 100):
    if is_prime(i):
        primes.append(i)
        print(i)

end_time = time.time()
execution_time = end_time - start_time
print("Execution Time: {:.6f} seconds".format(execution_time))
