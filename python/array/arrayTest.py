class UnSortedArray(object):
    """A simple wrapper around List.
    You cannot have -1 in the array.

    """
    def __init__(self, capacity: int):
        if capacity <= 0:
            raise Exception('capacity must be more than 0')
        self._data = []
        self._capacity = capacity

        # 模拟内存的操作，初始化的时候，把元素都填充为零值
        for i in range(capacity):
            self._data.append(0)
        
    def __getitem__(self, position: int) -> object:
        return self._data[position]

    def __setitem__(self, index: int, value: object):
        self._data[index] = value

    def __len__(self) -> int:
        # 长度我是看非0的数量
        length = 0
        for i in range(self._capacity):
            if self[i] != 0:
                length += 1
        return length

    def __iter__(self):
        for item in self._data:
            yield item

    def find(self, index: int) -> object:
        if index < 0 or index > len(self) - 1:
            print('index out of range')
            return None

        return self._data[index]

    def insert(self, index: int, value: int) -> bool:
        if len(self) >= self._capacity:
            print('array is full')
            return False
        elif index > self._capacity - 1:
            print('index out of range')
            return False
        else:
            if self[index] == 0:
                self[index] = value
            else:
                print(len(self), index, -1)
                for i in range(len(self), index, -1):
                    self[i] = self[i - 1]
                self[index] = value
            return True

    def delete(self, index:int):
        if index < 0 or index >= len(self):
            print('index out of range')
            return False
        else:
            for i in range(index, len(self)):
                self[i] = self[i + 1]

            self[len(self)] = 0

            return True

    def print_all(self):
        # 这里self可以直接循环的原因是上面实现了其内置的迭代器，即__iter__()方法
        for item in self:
            print(item)

    def show(self):
        print(self._data)
    



def test_myarray():
    array = UnSortedArray(5)
    print(array.insert(0, 1))
    # print(array.__len__())

    array.show()
    # array.delete(0)
    # array.show()

    # array.insert(0, 4)
    array.insert(1, 5)
    array.show()

    array.insert(1, 4)
    array.show()
    # array.delete(0)
    # array.show()



    # array.insert(3, 9)
    # array.insert(3, 10)
    # assert array.insert(0, 100) is False
    # assert len(array) == 5
    # assert array.find(1) == 5
    # assert array.delete(4) is True
    # array.print_all()


if __name__ == "__main__":
    test_myarray()