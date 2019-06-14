# import sys
# import cryptography
from cryptography.fernet import Fernet

key = 'TluxwB3fV_GWuLkR1_BzGs1Zk90TYAuhNMZP_0q4WyM='

# Oh no! The code is going over the edge! What are you going to do?
message = b'gAAAAABdAukG0chaCpNgInQPACScjsew5rcZXkrfcFUUm5qcGmTh1thx3UEsiNOnms42LA3MtRwNIFpQFIJyR3dXdJ-r06f_wRDUzPSVpnSm2wUy_1PpR01H1ZQWnr4GHfy7i3vhBc_bKe10qApOSmmqdtLNlnInc6tmAL0UCuYjPEXgYsDc3AE='

def main():
    f = Fernet(key)
    print(f.decrypt(message))


if __name__ == "__main__":
    main()