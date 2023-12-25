---
title: "How JavaScript executes."
tags: ["JavaScript"]
description: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
type: "lesson"
---

> Everything in JavaScript happens inside a exection context.

## Execution Context

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi itaque distinctio placeat commodi rerum quaerat ullam! Minus nobis doloremque, esse quo minima nisi totam qui sit dolor obcaecati assumenda voluptas nesciunt possimus aperiam unde, ut animi nulla quam distinctio.

```js
<Layout title={post.data.title}>
  <div class="flex">
    <div class="hidden lg:block">
      <ul>
        {headings.map((heading) => (
          <li>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
    <div class="prose mx-auto max-w-3xl dark:prose-invert">
      <h1>{post.data.title}</h1>
      <Content />
    </div>
  </div>
</Layout>
```

## Heading 2

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi itaque distinctio placeat commodi rerum quaerat ullam! Minus nobis doloremque, esse quo minima nisi totam qui sit dolor obcaecati assumenda voluptas nesciunt possimus aperiam unde, ut animi nulla quam distinctio.

### Subheading 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi itaque distinctio placeat commodi rerum quaerat ullam! Minus nobis doloremque, esse quo minima nisi totam qui sit dolor obcaecati assumenda voluptas nesciunt possimus aperiam unde, ut animi nulla quam distinctio.

### Subheading 2

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi itaque distinctio placeat commodi rerum quaerat ullam! Minus nobis doloremque, esse quo minima nisi totam qui sit dolor obcaecati assumenda voluptas nesciunt possimus aperiam unde, ut animi nulla quam distinctio.

## Heading 3

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi itaque distinctio placeat commodi rerum quaerat ullam! Minus nobis doloremque, esse quo minima nisi totam qui sit dolor obcaecati assumenda voluptas nesciunt possimus aperiam unde, ut animi nulla quam distinctio.

## Heading 4

Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi itaque distinctio placeat commodi rerum quaerat ullam! Minus nobis doloremque, esse quo minima nisi totam qui sit dolor obcaecati assumenda voluptas nesciunt possimus aperiam unde, ut animi nulla quam distinctio.
