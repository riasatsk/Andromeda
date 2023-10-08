require 'benchmark'

def is_prime(n)
  return false if n <= 1
  return true if n <= 3
  return false if n % 2 == 0 || n % 3 == 0

  i = 5
  while i * i <= n
    return false if n % i == 0 || n % (i + 2) == 0
    i += 6
  end

  true
end

start_time = Time.now

primes = [2, 3]
(5..999999).each do |i|
  primes << i if is_prime(i)
end

primes.each { |prime| puts prime }

end_time = Time.now
execution_time = end_time - start_time
puts "Execution Time: #{execution_time} seconds"
