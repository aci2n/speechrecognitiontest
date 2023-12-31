import tensorflow as tf

x = tf.constant([[1., 2., 3.],
                 [4., 5., 6.]])

print(x)
print(x.shape)
print(x.dtype)

x + x
5 * x
x @ tf.transpose(x)
tf.concat([x, x, x], axis=1)
tf.nn.softmax(x, axis=-1)
tf.reduce_sum(x)
tf.convert_to_tensor([1, 2, 3])
