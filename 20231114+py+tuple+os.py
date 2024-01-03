# os.
# os.walk 是 Python 中的一个用于遍历文件和文件夹的函数，它的全称是 "walk directory tree"。它的主要作用是生成文件夹中所有文件和子文件夹的路径，使你能够逐一处理它们。通过调用 os.walk，你可以轻松地遍历指定文件夹及其子文件夹中的所有内容，而无需手动编写递归遍历的代码。
# EN: os.walk is a function in Python that is used to traverse files and folders. Its full name is "walk directory tree". Its main function is to generate the paths of all files and subfolders in the folder, so that you can process them one by one. By calling os.walk, you can easily traverse all the contents of the specified folder and its subfolders without manually writing recursive traversal code.


# os.walk 函数返回一个迭代器，每次迭代都会返回一个包含三个元素的元组：当前文件夹的路径、当前文件夹中的子文件夹列表和当前文件夹中的文件列表。你可以使用这些信息来逐一处理文件和文件夹。
# EN: The os.walk function returns an iterator, and each iteration returns a tuple containing three elements: the path of the current folder, the list of subfolders in the current folder, and the list of files in the current folder. You can use this information to process files and folders one by one.

# 以下是一个使用 os.walk 遍历文件夹的示例：
# EN: Here is an example of using os.walk to traverse folders:
import os

folder_path = "/path/to/your/folder"

for root, dirs, files in os.walk(folder_path):
    print("Current folder:", root)
    print("Subfolders:", dirs)
    print("Files:", files)

# 在这个示例中，os.walk 会遍历指定文件夹 folder_path 及其所有子文件夹，然后在每次迭代中返回当前文件夹的路径、子文件夹列表和文件列表。你可以根据需要对这些信息进行操作，例如在前面的示例中使用它来查看文件和文件夹的信息。
# EN: In this example, os.walk will traverse the specified folder folder_path and all its subfolders, and then return the path of the current folder, the list of subfolders and the list of files in each iteration. You can manipulate this information as needed, for example, using it in the previous example to view information about files and folders.


# 元组的不可变性意味着一旦创建，就不能修改其内容，但可以执行各种操作来处理元组的数据
# 创建一个元组
my_tuple = (1, 2, 3, 'apple', 'banana')

# 访问元组中的元素
print(my_tuple[0])  # 输出：1
print(my_tuple[3])  # 输出：'apple'

# 元组的长度
print(len(my_tuple))  # 输出：5

# 遍历元组中的元素
for item in my_tuple:
    print(item)

# 检查元素是否在元组中
if 'apple' in my_tuple:
    print('苹果在元组中')

# 合并元组
tuple1 = (1, 2, 3)
tuple2 = ('a', 'b', 'c')
merged_tuple = tuple1 + tuple2
print(merged_tuple)  # 输出：(1, 2, 3, 'a', 'b', 'c')

# 元组解包
x, y, z = tuple1
print(x, y, z)  # 输出：1 2 3



