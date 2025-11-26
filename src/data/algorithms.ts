export const algorithmsData = [

  // ---------------- EXPERIMENT 1 ----------------

  {
    id: 1,
    name: "Experiment 1A: Signum Function",
    code: `% Experiment 1A
clc; clear; close all;
n = -10:10;
x = (n>0) - (n<0);
stem(n,x,'LineWidth',1.5);
xlabel('n'); ylabel('Amplitude');
title('Signum Function');
grid on;`
  },

  {
    id: 2,
    name: "Experiment 1B: Unit Step Signal",
    code: `% Experiment 1B
clc; clear; close all;
n = -10:10;
x = (n>=0);
stem(n,x,'LineWidth',1.5);
xlabel('n'); ylabel('Amplitude');
title('Unit Step Signal');
grid on;`
  },

  {
    id: 3,
    name: "Experiment 1C: Unit Impulse Signal",
    code: `% Experiment 1C
clc; clear; close all;
n = -10:10;
x = (n==0);
stem(n,x,'LineWidth',1.5);
xlabel('n'); ylabel('Amplitude');
title('Unit Impulse Signal');
grid on;`
  },

  {
    id: 4,
    name: "Experiment 1D: Sine Wave",
    code: `% Experiment 1D
clc; clear; close all;
t = 0:0.001:1;
x = sin(2*pi*5*t);
plot(t,x,'LineWidth',1.5);
xlabel('t'); ylabel('Amplitude');
title('Sine Wave (5 Hz)');
grid on;`
  },

  {
    id: 5,
    name: "Experiment 1E: Square Wave",
    code: `% Experiment 1E
clc; clear; close all;
t = 0:0.001:1;
x = square(2*pi*5*t);
plot(t,x,'LineWidth',1.5);
xlabel('t'); ylabel('Amplitude');
title('Square Wave (5 Hz)');
grid on;`
  },

  // ---------------- EXPERIMENT 2 ----------------

  {
    id: 6,
    name: "Experiment 2: Linear Convolution",
    code: `% Experiment 2
clc; clear; close all;
a = input('Enter sequence 1: ');
b = input('Enter sequence 2: ');
N1 = length(a);
N2 = length(b);
x = [a zeros(1,N2)];
y = [b zeros(1,N1)];
for i = 1:N1+N2-1
 z(i)=0;
 for j = 1:N1
 if (i-j+1)>0
 z(i) = z(i) + x(j)*y(i-j+1);
 end
 end
end
figure;
subplot(3,1,1); stem(a); title('Sequence 1');
subplot(3,1,2); stem(b); title('Sequence 2');
subplot(3,1,3); stem(z); title('Linear Convolution Output');`
  },

  // ---------------- EXPERIMENT 3 ----------------

  {
    id: 7,
    name: "Experiment 3: DFT & IDFT",
    code: `% Experiment 3
clc; clear; close all;
x = input('Enter input sequence: ');
N = input('Enter DFT length: ');
L = length(x);
x = [x zeros(1,N-L)];
X = zeros(1,N);
for k = 0:N-1
 for n = 0:N-1
 X(k+1) = X(k+1) + x(n+1)*exp(-1j*2*pi*k*n/N);
 end
end
x_rec = zeros(1,N);
for n = 0:N-1
 for k = 0:N-1
 x_rec(n+1) = x_rec(n+1) + (1/N)*X(k+1)*exp(1j*2*pi*k*n/N);
 end
end
figure;
subplot(3,1,1); stem(abs(X)); title('Magnitude');
subplot(3,1,2); stem(angle(X)); title('Phase');
subplot(3,1,3); stem(real(x_rec)); title('Reconstructed Signal');`
  },

  // ---------------- EXPERIMENT 4 ----------------

  {
    id: 8,
    name: "Experiment 4A: Circular Convolution (Manual)",
    code: `% Experiment 4A
clc; clear; close all;
x = input('Enter x[n]: ');
h = input('Enter h[n]: ');
N = max(length(x), length(h));
x1 = [x zeros(1,N-length(x))];
h1 = [h zeros(1,N-length(h))];
y = zeros(1,N);
for n = 0:N-1
 for m = 0:N-1
 y(n+1) = y(n+1) + x1(m+1)*h1(mod(n-m,N)+1);
 end
end
stem(0:N-1,y); title('Circular Convolution'); grid on;`
  },

  {
    id: 9,
    name: "Experiment 4B: Linear Convolution via Circular",
    code: `% Experiment 4B
clc; clear; close all;
x = input('Enter x[n]: ');
h = input('Enter h[n]: ');
L = length(x)+length(h)-1;
x1 = [x zeros(1,L-length(x))];
h1 = [h zeros(1,L-length(h))];
y = zeros(1,L);
for n = 1:L
 for m = 1:L
 k = mod(n-m,L);
 y(n) = y(n) + x1(m)*h1(k+1);
 end
end
stem(0:L-1,y); title('Linear Conv via Circular'); grid on;`
  },

  {
    id: 10,
    name: "Experiment 4C: Circular Convolution via DFT-IDFT",
    code: `% Experiment 4C
clc; clear; close all;
x = input('Enter x[n]: ');
h = input('Enter h[n]: ');
N = max(length(x),length(h));
x1 = [x zeros(1,N-length(x))];
h1 = [h zeros(1,N-length(h))];
X = fft(x1,N);
H = fft(h1,N);
Y = X .* H;
y = ifft(Y);
stem(0:N-1,real(y)); title('Circular Conv via DFT-IDFT'); grid on;`
  },

  // ---------------- EXPERIMENT 5 ----------------

  {
    id: 11,
    name: "Experiment 5: Window Functions",
    code: `% Experiment 5
clc; clear; close all;
N = 64;
n = 0:N-1;
w_rect = ones(1, N);
w_ham = 0.54 - 0.46*cos(2*pi*n/(N-1));
w_hann = 0.5*(1 - cos(2*pi*n/(N-1)));
w_black = 0.42 - 0.5*cos(2*pi*n/(N-1)) + 0.08*cos(4*pi*n/(N-1));
nfft = 1024;

[H_rect, f_rect] = freqz(w_rect, 1, nfft, 'whole');
[H_ham, f_ham ] = freqz(w_ham, 1, nfft, 'whole');
[H_hann, f_hann] = freqz(w_hann, 1, nfft, 'whole');
[H_black,f_black] = freqz(w_black,1, nfft, 'whole');

f_rect = f_rect/(2*pi);
f_ham = f_ham/(2*pi);
f_hann = f_hann/(2*pi);
f_black= f_black/(2*pi);

figure;
subplot(4,2,1); stem(n,w_rect); title('Rectangular Window');
subplot(4,2,3); stem(n,w_ham); title('Hamming Window');
subplot(4,2,5); stem(n,w_hann); title('Hanning Window');
subplot(4,2,7); stem(n,w_black); title('Blackman Window');
subplot(4,2,2); plot(f_rect-0.5,20*log10(abs(fftshift(H_rect))/max(abs(H_rect)))));
subplot(4,2,4); plot(f_ham-0.5,20*log10(abs(fftshift(H_ham))/max(abs(H_ham)))));
subplot(4,2,6); plot(f_hann-0.5,20*log10(abs(fftshift(H_hann))/max(abs(H_hann)))));
subplot(4,2,8); plot(f_black-0.5,20*log10(abs(fftshift(H_black))/max(abs(H_black)))));`
  },

  // ---------------- EXPERIMENT 6 ----------------

  {
    id: 12,
    name: "Experiment 6: FIR Low-pass Using Rectangular & Triangular Windows",
    code: `% Experiment 6
clc; clear all; close all;
fp = input('FP: ');
df = input('DF: ');
fs = input('FS: ');
wp = 2*pi*fp/fs;
ws = 2*pi*(fp+df)/fs;
wc = (wp+ws)/2;

M_rect = ceil(0.9*fs/df);
M_tri = ceil(3.1*fs/df);
N_rect = M_rect+1;
N_tri = M_tri+1;

n_rect = 0:N_rect-1;
hd_rect = zeros(1,N_rect);
for n=1:N_rect
 if (n-1)==M_rect/2, hd_rect(n)=wc/pi;
 else hd_rect(n)=sin(wc*((n-1)-M_rect/2))/(pi*((n-1)-M_rect/2));
 end
end

n_tri = 0:N_tri-1;
hd_tri = zeros(1,N_tri);
for n=1:N_tri
 if (n-1)==M_tri/2, hd_tri(n)=wc/pi;
 else hd_tri(n)=sin(wc*((n-1)-M_tri/2))/(pi*((n-1)-M_tri/2));
 end
end

w_rect = rectwin(N_rect)';
w_tri = triang(N_tri)';
h_rect = hd_rect.*w_rect;
h_tri = hd_tri.*w_tri;

[H_rect,w1]=freqz(h_rect,1,1024);
[H_tri,w2]=freqz(h_tri,1,1024);

figure;
subplot(2,2,1); stem(n_rect,h_rect);
subplot(2,2,2); plot(w1/pi,20*log10(abs(H_rect)));
subplot(2,2,3); stem(n_tri,h_tri);
subplot(2,2,4); plot(w2/pi,20*log10(abs(H_tri)));`
  },

  // ---------------- EXPERIMENT 7 ----------------

  {
    id: 13,
    name: "Experiment 7: FIR High-pass Filter Using Hamming & Hanning",
    code: `% Experiment 7
clc; clear; close all;
fp = input('FP: ');
fsb = input('FSB: ');
Fs = input('FS: ');

wp = 2*pi*fp/Fs;
ws = 2*pi*fsb/Fs;
wc = (wp+ws)/2;
dw = abs(ws-wp);

M = ceil(8*pi/dw)+1;
n = 0:M-1;
alpha = (M-1)/2;

hd = -sin(wc*(n-alpha))./(pi*(n-alpha));
center_index = round(alpha+1);
hd(center_index)=1-(wc/pi);

Wham = hamming(M)';
Whann = hann(M)';

h_ham = hd.*Wham;
h_hann = hd.*Whann;

[H_ham,w]=freqz(h_ham,1,1024);
[H_hann,w2]=freqz(h_hann,1,1024);`
  },

  // ---------------- EXPERIMENT 8 ----------------

  {
    id: 14,
    name: "Experiment 8: FIR Bandpass Using Kaiser Window",
    code: `% Experiment 8
clc; clear; close all;

fp1=input('fp1: '); fp2=input('fp2: ');
fs=input('fs: '); df=input('df: ');
Rp=input('Rp: '); As=input('As: ');

Wp1=fp1/(fs/2); Wp2=fp2/(fs/2);
Ws1=(fp1-df)/(fs/2); Ws2=(fp2+df)/(fs/2);

delta_p=(10^(Rp/20)-1)/(10^(Rp/20)+1);
delta_s=10^(-As/20);
delta=min(delta_p,delta_s);
A=-20*log10(delta);

if A<21, beta=0;
elseif A<=50, beta=0.5842*(A-21)^0.4+0.07886*(A-21);
else beta=0.1102*(A-8.7);
end

dfN=df/(fs/2);
N=ceil((A-8)/(2.285*2*pi*dfN));
if mod(N,2)~=0, N=N+1; end

Wn=[Wp1 Wp2];
b=fir1(N,Wn,'bandpass',kaiser(N+1,beta),'scale');`
  },

  // ---------------- EXPERIMENT 9 ----------------

  {
    id: 15,
    name: "Experiment 9: Butterworth LPF (Impulse Invariant)",
    code: `% Experiment 9
clc; clear; close all;

fp=input('fp: '); 
fs=input('fs: ');
Ap=input('Ap: '); 
As=input('As: ');
Fs=input('Fs: ');

Wp=2*pi*fp; 
Ws=2*pi*fs;

n=log10((10^(As/10)-1)/(10^(Ap/10)-1))/(2*log10(Ws/Wp));
n=ceil(n);

Wc=Wp/((10^(Ap/10)-1)^(1/(2*n)));

[ba,aa]=butter(n,Wc,'s');
[bz,az]=impinvar(ba,aa,Fs);`
  },

  // ---------------- EXPERIMENT 10A ----------------

  {
    id: 16,
    name: "Experiment 10A: Downsampling",
    code: `% Experiment 10A
N=51; n=0:N-1;
N_F1=input('F1: ');
x1=sin(2*pi*N_F1*n);

N_F2=input('F2: '); 
N_F3=input('F3: ');
x2=sin(2*pi*N_F2*n)+sin(2*pi*N_F3*n);

M=input('M: ');
y1=downsample(x1,M);
y2=downsample(x2,M);`
  },

  // ---------------- EXPERIMENT 10B ----------------

  {
    id: 17,
    name: "Experiment 10B: Upsampling",
    code: `% Experiment 10B
N=51; n=0:N-1;

N_F1=input('F1: ');
x1=sin(2*pi*N_F1*n);

N_F2=input('F2: '); 
N_F3=input('F3: ');
x2=sin(2*pi*N_F2*n)+sin(2*pi*N_F3*n);

M=input('M: ');
y1=upsample(x1,M);
y2=upsample(x2,M);`
  }

];
