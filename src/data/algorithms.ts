export const algorithmsData = [
    {
      id: 1,
      name: "1(a) Signum Function",
      code: `function [x,y] = DAJKS(n1, n2)
  x = n1:n2;
  y = (x > 0) - (x < 0);
  
  subplot(2,1,1)
  stem(x, y, 'LineWidth', 1.5);
  xlabel('Sample-number (n)');
  ylabel('Amplitude');
  legend('Akshat Ahuja 102315073');
  ylim([-3 3]);
  grid on;
  
  subplot(2,1,2)
  plot(x, y, 'LineWidth', 1.5);
  xlabel('Time (t)');
  ylabel('Amplitude');
  legend('Akshat Ahuja 102315073');
  ylim([-3 3]);
  grid on;
  end`
    },
    {
      id: 2,
      name: "1(b) Unit Step Signal",
      code: `function [x,n] = DPGK(n0, n1, n2)
  n = [n1:n2];
  x = [(n-n0) >= 0];
  stem(n,x);
  title('Unit-step signal in discrete time domain');
  xlabel('Sample-number(n)');
  ylabel('Amplitude');
  legend('Akshat Ahuja 102315073');
  ylim([-1.5 1.5]);
  grid on;
  end`
    },
    {
      id: 3,
      name: "1(c) Unit Impulse Signal",
      code: `function [x,n] = DAKK(n0, n1, n2)
  n = n1:n2;
  x = (n - n0) == 0;
  stem(n, x, 'LineWidth',1.5);
  title('Unit-impulse signal in discrete time domain');
  xlabel('Sample-number(n)');
  ylabel('Amplitude');
  legend('Akshat Ahuja 102315073');
  ylim([-1.5 1.5]);
  grid on;
  end`
    },
    {
      id: 4,
      name: "1(d) Sine Wave",
      code: `t = 0:0.001:1;
  y1 = DAKS(1, 5, 0, t);
  y2 = DAKS1(0.5, 10, pi/4, t);
  
  stem(t, y1, 'r')
  hold on;
  stem(t, y2, 'g')
  xlabel('Sample-number(n)')
  ylabel('Amplitude')
  legend('Akshat Ahuja 102315073 - Wave1','Akshat Ahuja 102315073 - Wave2')
  grid on;
  
  function y = DAKS(a,f,p,t)
  y = a*sin(2*pi*f*t + p);
  end
  
  function y = DAKS1(a1,f1,p1,t)
  y = a1*sin(2*pi*f1*t + p1);
  end`
    },
    {
      id: 5,
      name: "1(e) Square Wave",
      code: `function [y] = DAJK(UL,f,d)
  t = 0:0.0001:UL;
  y = square(2*pi*f*t, d);
  
  subplot(2,1,1)
  stem(t,y,'r')
  xlabel('Sample-number(n)')
  ylabel('Amplitude')
  legend('Akshat Ahuja 102315073')
  ylim([-1.5 1.5])
  grid on;
  
  subplot(2,1,2)
  plot(t,y)
  legend('Akshat Ahuja 102315073')
  xlabel('Time(t)')
  ylabel('Amplitude')
  ylim([-1.5 1.5])
  grid on;
  end`
    },
    {
      id: 6,
      name: "Experiment 2: Linear Convolution",
      code: `clc
  clear all;
  a = input('Enter the sequence 1');
  b = input('Enter the sequence 2');
  a1 = length(a);
  b1 = length(b);
  a2 = length(b);
  b2 = length(a);
  x = [a, zeros(1,a2)];
  y = [b, zeros(1,a1)];
  for i = 1:(a1+a2-1)
      z(i)=0;
      for i1 = 1:a1
          if (i-i1+1)>0;
              z(i) = z(i) + x(i1) * y(i-i1+1);
          end
      end
  end
  
  subplot(3,1,1)
  stem(a,'r')
  title('First Sequence')
  xlabel('No of samples')
  ylabel('Amplitude')
  
  subplot(3,1,2)
  stem(b,'g')
  title('Second Sequence')
  xlabel('No of samples')
  ylabel('Amplitude')
  ylim([-1.5 1.5]);
  legend('Akshat Ahuja 102315073')
  
  subplot(3,1,3)
  stem(z)
  title('Output Sequence')
  xlabel('No of samples')
  ylabel('Amplitude')
  ylim([-1.5 1.5]);
  legend('Akshat Ahuja 102315073')
  
  conv(a,b)`
    },
    {
      id: 7,
      name: "Experiment 3: DFT and IDFT",
      code: `clc; clear;
  
  x = input('Enter the input sequence x(n) as a row vector: ');
  N = input('Enter the number of DFT points N: ');
  
  L = length(x);
  if N < L
      error('N must be greater than or equal to the length of x(n)')
  end
  x_padded = [x zeros(1, N - L)];
  
  X = zeros(1, N);
  for k = 0:N-1
      for n = 0:N-1
          X(k+1) = X(k+1) + x_padded(n+1) * exp(-j * 2 * pi * k * n / N);
      end
  end
  
  magX = abs(X);
  phaseX = angle(X);
  
  disp('DFT of the input sequence:');
  disp(X);
  
  figure;
  sgtitle('DFT Analysis (Manual)', 'FontWeight', 'bold');
  
  subplot(2,1,1)
  stem(0:N-1, magX, 'filled');
  title('Magnitude Spectrum |X(k)|');
  xlabel('k'); ylabel('|X(k)|');
  legend('Akshat Ahuja 102315073')
  
  subplot(2,1,2)
  stem(0:N-1, phaseX, 'filled');
  title('Phase Spectrum ∠X(k)');
  xlabel('k'); ylabel('∠X(k) (radians)');
  legend('Akshat Ahuja 102315073')
  
  x_reconstructed = zeros(1, N);
  for n = 0:N-1
      for k = 0:N-1
          x_reconstructed(n+1) = x_reconstructed(n+1) + X(k+1) * exp(j * 2 * pi * k * n / N);
      end
      x_reconstructed(n+1) = x_reconstructed(n+1) / N;
  end
  
  disp('Reconstructed sequence using IDFT:');
  disp(x_reconstructed);
  
  figure;
  sgtitle('Original vs Reconstructed Signal', 'FontWeight', 'bold');
  
  subplot(2,1,1)
  stem(0:L-1, x, 'filled');
  title('Original Input x(n)');
  xlabel('n'); ylabel('x(n)');
  legend('Akshat Ahuja 102315073')
  
  subplot(2,1,2)
  stem(0:L-1, real(x_reconstructed(1:L)), 'filled');
  title('Reconstructed x(n) from IDFT');
  xlabel('n'); ylabel('x_{reconstructed}(n)');
  legend('Akshat Ahuja 102315073')`
    },
    {
      id: 8,
      name: "Experiment 4(a,b): Circular & Linear Convolution",
      code: `clc; clear; close all;
  
  x = input('Enter first sequence x[n] ');
  h = input('Enter second sequence h[n] ');
  
  N = max(length(x), length(h));
  
  x_circ = [x, zeros(1, N-length(x))];
  h_circ = [h, zeros(1, N-length(h))];
  circ_conv = zeros(1, N);
  
  for n = 1:N
      for k = 1:N
          m = mod(n-k, N);
          if m == 0, m = N; end
          circ_conv(n) = circ_conv(n) + x_circ(k) * h_circ(m);
      end
  end
  
  disp('Circular Convolution Result:');
  disp(circ_conv);
  
  figure;
  stem(0:N-1, circ_conv, 'filled');
  title('Circular Convolution Result');
  xlabel('n'); ylabel('y_{c}[n]');
  legend('Akshat Ahuja 102315073'); grid on;
  
  M = length(x);
  L = length(h);
  N_lin = M + L - 1;
  
  x_lin = [x, zeros(1, N_lin-M)];
  h_lin = [h, zeros(1, N_lin-L)];
  lin_conv = zeros(1, N_lin);
  
  for n = 1:N_lin
      for k = 1:N_lin
          m = mod(n-k, N_lin);
          if m == 0, m = N_lin; end
          lin_conv(n) = lin_conv(n) + x_lin(k) * h_lin(m);
      end
  end`
    },
    {
      id: 9,
      name: "Experiment 4(c): Circular Convolution from Linear Convolution",
      code: `clc; clear; close all;
  
  x = input('Enter first sequence x[n] ');
  h = input('Enter second sequence h[n] ');
  
  N = max(length(x), length(h));
  
  lin_full = conv(x, h);
  circ_conv = zeros(1, N);
  
  for i = 1:length(lin_full)
      idx = mod(i-1, N) + 1;
      circ_conv(idx) = circ_conv(idx) + lin_full(i);
  end
  
  disp('Circular Convolution (from Linear Convolution):');
  disp(circ_conv);
  
  stem(0:N-1, circ_conv, 'filled');
  title('Circular Convolution using Linear Convolution');
  xlabel('n'); ylabel('y_c[n]');
  legend('Akshat Ahuja 102315073'); grid on;`
    },
    {
      id: 10,
      name: "Experiment 4(d): Circular Convolution using DFT-IDFT",
      code: `clc; clear; close all;
  
  x = input('Enter first sequence x[n]: ');
  h = input('Enter second sequence h[n]: ');
  
  N = max(length(x), length(h));
  
  x_circ = [x, zeros(1, N-length(x))];
  h_circ = [h, zeros(1, N-length(h))];
  
  X = fft(x_circ, N);
  H = fft(h_circ, N);
  Y = X .* H;
  circ_conv = ifft(Y);
  
  disp('Circular Convolution (DFT-IDFT):');
  disp(circ_conv);
  
  stem(0:N-1, real(circ_conv), 'filled');
  title('Circular Convolution using DFT-IDFT');
  xlabel('n'); ylabel('y_c[n]');
  legend('Akshat Ahuja 102315073'); grid on;`
    }
  ];
  