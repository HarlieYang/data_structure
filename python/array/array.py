MEM_SIZE = 1024
MEMORY = []
for i in range(MEM_SIZE):
    MEMORY.append(0)


def print_mem():
    print(MEMORY)

def print_array(arr_addr, length):
    for i in range(length):
        item = ''
        for j in range(arr_addr + i * 8, arr_addr + (i + 1) * 8):
            item += str(MEMORY[j])

        print(int(item, 2))

# 查询
def find(arr_addr,index,arr_int8):
    if index > len(arr_int8) - 1: return
    num = ''
    for j in range(arr_addr + index * 8, arr_addr + (index + 1) * 8):
            num += str(MEMORY[j])
    print('当前值为----')
    print(int(num, 2))

def main():
    # print_mem()
    arr_int8 = [2, 4, 6]
    arr_addr = 0
    for i, item in enumerate(arr_int8):
        bin_item = bin(item).lstrip('0b')
        for j, bit in enumerate(str(bin_item)):
            MEMORY[arr_addr + 8 * (i + 1) - len(bin_item) + j] = int(bit)

    print_mem()
    print_array(arr_addr, 4)
    find(arr_addr,0,arr_int8)


# arr_addr + 8 * (i + 1) 是每个元素的结束地址
# 每个元素完整的占用地址是   arr_addr + 8 * i  至 arr_addr + 8 * (i + 1)

if __name__ == "__main__":
    main()