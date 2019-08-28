from sklearn.cluster import KMeans
import numpy as np
import pandas as pd
import pickle

df=pd.read_csv('./train.csv')
model=KMeans(n_clusters=3,random_state=0).fit(df)

# open a file, where you ant to store the data
file = open('cluster_model.pkl', 'wb')

# dump information to that file
pickle.dump(model, file)