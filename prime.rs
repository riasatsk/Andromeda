use std::time::{Instant};

fn is_prime(n: u32) -> bool {
    if n <= 1 {
        return false;
    }
    if n <= 3 {
        return true;
    }
    if n % 2 == 0 || n % 3 == 0 {
        return false;
    }
    let mut i = 5;
    while i * i <= n {
        if n % i == 0 || n % (i + 2) == 0 {
            return false;
        }
        i += 6;
    }
    true
}

fn main() {
    let start_time = Instant::now();

    let mut primes = vec![2, 3];
    for i in 5..=1_000_000 {
        if is_prime(i) {
            primes.push(i);
            println!("{}", i);
        }
    }

    let end_time = Instant::now();
    let execution_time = end_time.duration_since(start_time);

    println!("Execution Time: {:?}", execution_time);
}
`