package main

import (
    "fmt"
    "time"
)

func main() {
    start := time.Now()

    prime := []int{2, 3}
    for i := 5; i < 1000000; i++ {
        possiblePrime := true

        for _, p := range prime {
            if i % p == 0 {
                possiblePrime = false
                break
            }
        }

        if possiblePrime {
            prime = append(prime, i)
            fmt.Println(i)
        }
    }

    end := time.Now()
    executionTime := end.Sub(start)
    fmt.Printf("Execution Time: %s\n", executionTime)
}
